
ALTER PROCEDURE [dbo].[PosmStatusDetail.Report2]
	@FromDate VARCHAR(32) = NULL,
	@ToDate VARCHAR(32) = NULL,
	@SupplierId INT = NULL,
	@CycleId INT = NULL,
	@PosmId INT = NULL
AS
-- [dbo].[PosmStatusDetail.Report2] '2025-06-13','2025-06-13'
BEGIN
	SELECT sl.ShopId, sl.ShopName, sl.SupplierId, s.SupplierCode, s.SupplierName, sl.[ShopName.vi-VN], sl.[Address.vi-VN] AS [Address]
	INTO #shop
	FROM StoreList AS sl
	LEFT JOIN Supplier AS s ON s.SupplierId = sl.SupplierId
	WHERE ISNULL(sl.IsDelete, 0) = 0
	AND (@SupplierId IS NULL OR sl.SupplierId = @SupplierId)
	
	SELECT *
	INTO #pList
	FROM PosmList AS pl
	WHERE (@PosmId IS NULL OR pl.Id = @PosmId)
	AND (@CycleId IS NULL OR pl.CycleId = @CycleId)
	


	SELECT 
    e.EmployeeCode + ' - ' + e.FullName AS Employee,
    dbo.fnIntToDateString(v.WorkDate) AS WorkDate,
    d.PosmId,
    v.ShopId,
    d.SurveyId,
    IIF(d.SurveyId = 7, mld.[Name.vi-VN], d.[Value]) AS TargetValue
	INTO #posmData
	FROM [PosmResult.V2.Detail] AS d
	JOIN [PosmResult.V2] AS v ON v.PResultId = d.PResultId
	LEFT JOIN Employees AS e ON e.Id = v.EmployeeId
	LEFT JOIN MasterListData AS mld ON mld.ListCode = 'SURVEYOption' AND mld.GroupId = 7 AND d.SurveyId = 7 
		AND CONVERT(varchar(32), mld.Id) = d.[Value] AND d.[Value] > 0
	WHERE (@PosmId IS NULL OR d.PosmId = @PosmId)
	  AND v.WorkDate BETWEEN [dbo].[DateToInt](@FromDate) AND [dbo].[DateToInt](@ToDate);

	PRINT(1)


 
	DECLARE @survey TABLE (SurveyId INT, SurveyName NVARCHAR(500))
	INSERT INTO @survey
	SELECT mld.Id, IIF(mld.r = 1, mld.[Name.vi-VN], mld.[Name.vi-VN] + '_' + mld.r) 
	FROM (
	SELECT mld.Id, mld.[Name.vi-VN] ,convert(varchar(32),ROW_NUMBER() OVER (PARTITION BY mld.[Name.vi-VN] ORDER BY  mld.Id)) r
	FROM MasterListData AS mld 
	WHERE mld.ListCode = 'POSMSURVEY' and mld.Code not in ( 2,4,5,3,7,8,9,10)	) mld
	
	ORDER BY mld.Id ASC 
	
	DECLARE @cols NVARCHAR (MAX)
		SELECT @cols = COALESCE (@cols + ',[' + _survey + ']', 
					   '[' + _survey + ']')
					   FROM    (SELECT s.SurveyId, s.SurveyName AS _survey
					            FROM @survey AS s  )  PV   ORDER BY pv.SurveyId
	PRINT @cols
	
	

	SELECT * 
	INTO #data
	FROM (
	SELECT row_number() OVER (PARTITION BY p.Employee,s.SupplierCode,s.ShopId,pl.PosmCode ORDER BY p.WorkDate DESC) RowNum ,p.Employee,p.WorkDate,p.SurveyId, m.SurveyName AS [Survey], p.TargetValue ,s.SupplierCode, s.SupplierName, s.ShopId, s.[ShopName.vi-VN] AS ShopName, s.[Address], pl.PosmCode, pl.PosmName
	FROM #posmData p
	LEFT JOIN #shop AS s ON s.shopid = p.shopid
	LEFT JOIN #pList AS pl ON pl.Id = p.PosmId
	LEFT join @survey AS m ON m.SurveyId = p.SurveyId
	) AS t
	WHERE t.RowNum = 1
	 --null ShipTo,
	
	
	DECLARE @sql NVARCHAR(MAX) = ''
	SET @sql ='
	SELECT Employee, WorkDate,SupplierCode, SupplierName, ShopId, ShopName, Address, PosmCode as N''Mã Posm'', PosmName as N''Tên Posm'', '+@cols+'
	FROM 
	(SELECT d.Employee,d.WorkDate,d.SupplierCode, d.SupplierName, d.ShopId, d.ShopName, d.[Address], d.PosmCode,
	       d.PosmName, d.[Survey], d.TargetValue
	FROM #data AS d
	) AS t
	PIVOT(
		MAX(TargetValue)
		FOR [Survey] IN (' + @cols + ')
	) AS pivot_table'
	
	--SELECT * FROM #posmData
	
	EXECUTE sp_executesql @sql
	
	--SELECT * FROM @survey
	
	DROP TABLE #pList
	DROP TABLE #shop
	DROP TABLE #posmData
	DROP TABLE #data
END
GO

