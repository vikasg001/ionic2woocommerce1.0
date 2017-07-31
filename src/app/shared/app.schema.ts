/**
 * Created by npandey on 3/29/2017.
 */


export class AppSchema {

  public static TABLE_ASSESSMENT = "CREATE TABLE IF NOT EXISTS Assessment (" +
    "assessmentid VARCHAR(50)," +
    "assessmentname TEXT," +
    "silid VARCHAR(50)," +
    "numpersonnel TEXT," +
    "hourstrackside TEXT," +
    "datecreated INTEGER(20)," +
    "assessorid VARCHAR(50)," +
    "assessorname TEXT," +
    "assessmentstatusid VARCHAR(50)," +
    "questionversionid VARCHAR(50)," +
    "duzonemapid VARCHAR(50)," +
    "sectionduzonemapid VARCHAR(50)," +
    "elr TEXT," +
    "frommiles TEXT," +
    "fromyards TEXT," +
    "tomiles TEXT," +
    "toyards TEXT," +
    "searchparamid VARCHAR(50)," +
    "searchtext TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "filtercolumn1 TEXT," +
    "filtercolumn2 TEXT," +
    "filtercolumn3 TEXT," +
    "filtercolumn4 TEXT," +
    "assessmentStatus VARCHAR(10)," +
    "userId INTEGER(10)," +
    "parentAssessmentid VARCHAR(50)," +
    "PRIMARY KEY(assessmentid)" +
    ")";

  public static TABLE_ASSESSMENT_ASSETS = "CREATE TABLE IF NOT EXISTS AssessmentAssets (" +
    "assessmentassestid VARCHAR(50)," +
    "assessmentid VARCHAR(50)," +
    "assetid VARCHAR(50)," +
    "PRIMARY KEY(assessmentassestid)" +
    ")";

  public static TABLE_ASSESSMENT_DETAILS = "CREATE TABLE IF NOT EXISTS AssessmentDetails (" +
    "assessmentdetailsid VARCHAR(50)," +
    "assessmentid VARCHAR(50), " +
    "questionid VARCHAR(50)," +
    "score TEXT, " +
    "PRIMARY KEY(assessmentdetailsid)" +
    ")";

  public static TABLE_ASSESSMENT_ELRS = "CREATE TABLE IF NOT EXISTS AssessmentElrs (" +
    "assessmentelrid VARCHAR(50)," +
    "assessmentid VARCHAR(50), " +
    "elrid VARCHAR(50)," +
    "PRIMARY KEY(assessmentelrid)" +
    ")";

  public static TABLE_ASSESSMENT_RESULTS = "CREATE TABLE IF NOT EXISTS AssessmentResults (" +
    "assessmentresultsid VARCHAR(50)," +
    "assessmentid VARCHAR(50)," +
    "silid INTEGER(10), " +
    "isselectedsil TEXT," +
    "totalweightingscore TEXT," +
    "totaldependencymodifierscore TEXT," +
    "maxscore TEXT," +
    "percentagemaxexposure TEXT," +
    "riskmodifiedexposure TEXT," +
    "workforceexposurescore TEXT," +
    "equivalentexposuretime TEXT," +
    "worksafe TEXT," +
    "modifiedriskscore TEXT," +
    "isdisabled INTEGER(10)," +
    "PRIMARY KEY(assessmentresultsid)" +
    ")";


  public static TABLE_ASSESSMENT_TASKS = "CREATE TABLE IF NOT EXISTS AssessmentTasks (" +
    "assessmenttaskid VARCHAR(50)," +
    "assessmentid VARCHAR(50), " +
    "taskid VARCHAR(50), " +
    "PRIMARY KEY(assessmenttaskid)" +
    ")";

  public static TABLE_ASSESSMENT_SEARCH_CONFIG = "CREATE TABLE IF NOT EXISTS MTAssessmentSearchConfig (" +
    "searchparamid VARCHAR(50)," +
    "searchparamname TEXT, " +
    "toshow TEXT, " +
    "PRIMARY KEY(searchparamid)" +
    ")";

  public static TABLE_ASSESSMENT_SEARCH_CONFIG_SUB = "CREATE TABLE IF NOT EXISTS MTAssessmentSearchConfigSub (" +
    "subparamid VARCHAR(50)," +
    "paramid VARCHAR(50)," +
    "columnname TEXT, " +
    "PRIMARY KEY(subparamid)" +
    ")";

  public static TABLE_ASSESSMENT_STATUS = "CREATE TABLE IF NOT EXISTS MTAssessmentStatus (" +
    "statusid VARCHAR(50)," +
    "name TEXT," +
    "type TEXT," +
    "layoutType TEXT, " +
    "objectType TEXT, " +
    "modifieddate INTEGER(20), " +
    "PRIMARY KEY(statusid)" +
    ")";

  public static TABLE_CONSTANTS = "CREATE TABLE IF NOT EXISTS MTConstants (" +
    "constantid VARCHAR(50), " +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "constantname TEXT, " +
    "constantvalue TEXT, " +
    "datatype TEXT, " +
    "constantunit TEXT, " +
    "minrange TEXT, " +
    "maxrange TEXT, " +
    "PRIMARY KEY(constantid)" +
    ")";

  public static TABLE_DU = "CREATE TABLE IF NOT EXISTS MTDU (" +
    "duid VARCHAR(50)," +
    "code TEXT," +
    "name TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(duid)" +
    ")";

  public static TABLE_DU_ZONE_MAP = "CREATE TABLE IF NOT EXISTS MTDUZoneMap (" +
    "duzonemapid VARCHAR(50)," +
    "duid VARCHAR(50)," +
    "zoneid VARCHAR(50)," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(duzonemapid)" +
    ")";

  public static TABLE_ELR = "CREATE TABLE IF NOT EXISTS MTELR (" +
    "elrid VARCHAR(50)," +
    "elr TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(elrid)" +
    ")";

  public static TABLE_ELR_DU_ZONE_MAP = "CREATE TABLE IF NOT EXISTS MTELRDUZoneMap (" +
    "elrduzonemapid VARCHAR(50)," +
    "elrid VARCHAR(50)," +
    "duzonemapid VARCHAR(50)," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(elrduzonemapid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_CLASS = "CREATE TABLE IF NOT EXISTS MTEllipseAssetClass (" +
    "classid VARCHAR(50)," +
    "classcode TEXT," +
    "classdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(classid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_EGI = "CREATE TABLE IF NOT EXISTS MTEllipseAssetEGI (" +
    "egiid VARCHAR(50)," +
    "egicode TEXT," +
    "egidescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(egiid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_ITEM = "CREATE TABLE IF NOT EXISTS MTEllipseAssetItem (" +
    "itemid VARCHAR(50)," +
    "itemcode TEXT," +
    "itemdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(itemid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_POSITION = "CREATE TABLE IF NOT EXISTS MTEllipseAssetPosition (" +
    "positionid VARCHAR(50)," +
    "positioncode TEXT," +
    "positiondescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(positionid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_SECTION_MANAGER = "CREATE TABLE IF NOT EXISTS MTEllipseAssetSectionManager (" +
    "sectionmanagerid VARCHAR(50)," +
    "sectionmanagercode TEXT," +
    "sectionmanagerdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(sectionmanagerid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_STATUS = "CREATE TABLE IF NOT EXISTS MTEllipseAssetStatus (" +
    "statusid VARCHAR(50)," +
    "statuscode TEXT," +
    "statusdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(statusid)" +
    ")";

  public static TABLE_ELLIPSE_ASSET_STRG_ROUTE = "CREATE TABLE IF NOT EXISTS MTEllipseAssetStrgRoute (" +
    "strgrouteid VARCHAR(50)," +
    "strgroutecode TEXT," +
    "strgroutedescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(strgrouteid)" +
    ")";

  public static TABLE_ELLIPSE_ASSETS = "CREATE TABLE IF NOT EXISTS MTEllipseAssets (" +
    "assetid VARCHAR(50)," +
    "elrid VARCHAR(50)," +
    "egiid VARCHAR(50)," +
    "classid VARCHAR(50)," +
    "itemid VARCHAR(50)," +
    "routeid VARCHAR(50)," +
    "duid VARCHAR(50)," +
    "sectionid VARCHAR(50)," +
    "sectionmanagerid VARCHAR(50)," +
    "strgrouteid VARCHAR(50)," +
    "positionid VARCHAR(50)," +
    "statusid VARCHAR(50)," +
    "signalboxid VARCHAR(50)," +
    "trackid VARCHAR(50)," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "assoceqp TEXT," +
    "rcmsig TEXT," +
    "rcmsigfpl TEXT," +
    "startmileage TEXT," +
    "endmileage TEXT," +
    "assetnumber TEXT," +
    "structuredplantnumber TEXT," +
    "assetdesc1 TEXT," +
    "assetdesc2 TEXT," +
    "activeflag TEXT," +
    "colloquialname1 TEXT," +
    "colloquialname2 TEXT," +
    "colloquialname3 TEXT," +
    "colloquialname4 TEXT," +
    "colloquialname5 TEXT," +
    "colloquialname6 TEXT," +
    "colloquialname7 TEXT," +
    "colloquialname8 TEXT," +
    "railid1 TEXT," +
    "parentassetnumber TEXT," +
    "parentassetdesc1 TEXT," +
    "parentassetdesc2 TEXT," +
    "PRIMARY KEY(assetid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_DISCIPLINE = "CREATE TABLE IF NOT EXISTS MTEllipseTaskDiscipline (" +
    "disciplineid VARCHAR(50)," +
    "disciplinedescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(disciplineid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_MST_JOB_NUM = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstJobNum (" +
    "mstjobnumid VARCHAR(50)," +
    "mstjobnumcode TEXT," +
    "mstjobnumdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(mstjobnumid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_MST_JOB_WORK_UNIT = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstJobWorkUnit (" +
    "mstjobworkunitid VARCHAR(50)," +
    "mstjobworkunitcode TEXT," +
    "mstjobworkunitdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(mstjobworkunitid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_MST_TYPE = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstType (" +
    "msttypeid VARCHAR(50)," +
    "msttypecode TEXT," +
    "msttypedescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(msttypeid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_WORK_GROUP = "CREATE TABLE IF NOT EXISTS MTEllipseTaskWorkGroup (" +
    "workgroupid VARCHAR(50)," +
    "workgroupcode TEXT," +
    "workgroupdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(workgroupid)" +
    ")";

  public static TABLE_ELLIPSE_TASK_WORK_GROUP_SET = "CREATE TABLE IF NOT EXISTS MTEllipseTaskWorkGroupSet (" +
    "workgroupsetid VARCHAR(50)," +
    "workgroupsetdescription TEXT," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "PRIMARY KEY(workgroupsetid)" +
    ")";

  public static TABLE_ELLIPSE_TASKS = "CREATE TABLE IF NOT EXISTS MTEllipseTasks (" +
    "taskid VARCHAR(50)," +
    "assetid VARCHAR(50)," +
    "disciplineid VARCHAR(50)," +
    "workgroupsetid VARCHAR(50)," +
    "workgroupid VARCHAR(50)," +
    "mstjobnumid VARCHAR(50)," +
    "mstjobdescid VARCHAR(50)," +
    "mstjobworkunitid VARCHAR(50)," +
    "assignedtoid VARCHAR(50)," +
    "mntid VARCHAR(50)," +
    "msttypeid VARCHAR(50)," +
    "mstcomponentid VARCHAR(50)," +
    "mstcompmodifierid VARCHAR(50)," +
    "modifieddate INTEGER(20)," +
    "modifiedby TEXT," +
    "mstlsd TEXT," +
    "mstdescriptionline1 TEXT," +
    "mstdescriptionline2 TEXT," +
    "mstfrequency TEXT," +
    "mstjobdescriptioncode TEXT," +
    "mstlpd TEXT," +
    "mstsegmentstart TEXT," +
    "mstsegmentend TEXT," +
    "msttasknumber TEXT," +
    "mstnsd TEXT," +
    "mstnsdindicator TEXT," +
    "mileagefrom TEXT," +
    "mileageto TEXT," +
    "mstsegmentuom TEXT," +
    "mstunitsrequired TEXT," +
    "schedulingindicator TEXT," +
    "PRIMARY KEY(taskid)" +
    ")";

  public static TABLE_QUESTION_CATEGORY = "CREATE TABLE IF NOT EXISTS MTQuestionCategory (" +
    "categoryid VARCHAR(50)," +
    "questionversionid VARCHAR(50)," +
    "category TEXT," +
    "PRIMARY KEY(categoryid)" +
    ")";

  public static TABLE_QUESTION_CHECK_SIL_MAP = "CREATE TABLE IF NOT EXISTS MTQuestionCheckSilMap (" +
    "checksilmapid VARCHAR(50)," +
    "checkid VARCHAR(50)," +
    "silid VARCHAR(50), " +
    "PRIMARY KEY(checksilmapid)" +
    ")";

  public static TABLE_QUESTION_FACTORS = "CREATE TABLE IF NOT EXISTS MTQuestionFactors (" +
    "factorid VARCHAR(50)," +
    "questionid VARCHAR(50), " +
    "sequence TEXT," +
    "description TEXT," +
    "value TEXT," +
    "PRIMARY KEY(factorid)" +
    ")";

  public static TABLE_QUESTION_VERSION = "CREATE TABLE IF NOT EXISTS MTQuestionVersion (" +
    "questionversionid VARCHAR(50)," +
    "versionstatusid VARCHAR(50)," +
    "versionnumber TEXT, " +
    "name TEXT, " +
    "datecreated INTEGER(20), " +
    "dateactivated INTEGER(20), " +
    "datemodified INTEGER(20), " +
    "datedeactivated INTEGER(20), " +
    "createdby TEXT, " +
    "modifiedby TEXT, " +
    "PRIMARY KEY(questionversionid)" +
    ")";

  public static TABLE_QUESTION_WARNINGS = "CREATE TABLE IF NOT EXISTS MTQuestionWarnings (" +
    "warningid VARCHAR(50)," +
    "questionid VARCHAR(50)," +
    "questioncode TEXT, " +
    "formula TEXT, " +
    "message TEXT, " +
    "PRIMARY KEY(warningid)" +
    ")";

  public static TABLE_QUESTIONS = "CREATE TABLE IF NOT EXISTS MTQuestions (" +
    "questionid VARCHAR(50)," +
    "questionversionid VARCHAR(50)," +
    "categoryid VARCHAR(50), " +
    "displayorder TEXT, " +
    "questioncode TEXT, " +
    "questionname TEXT, " +
    "description TEXT, " +
    "dependencydescriptor TEXT, " +
    "intent TEXT, " +
    "formulaweighting1 TEXT, " +
    "formulaweighting2 TEXT, " +
    "formuladependencymod TEXT, " +
    "PRIMARY KEY(questionid)" +
    ")";

  public static TABLE_QUESTIONS_CHECKS = "CREATE TABLE IF NOT EXISTS MTQuestionsChecks (" +
    "checkid VARCHAR(50)," +
    "questionid VARCHAR(50)," +
    "questioncode TEXT, " +
    "formula TEXT, " +
    "PRIMARY KEY(checkid)" +
    ")";

  public static TABLE_SIL = "CREATE TABLE IF NOT EXISTS MTSIL (" +
    "silid VARCHAR(50)," +
    "questionversionid VARCHAR(50)," +
    "sil TEXT, " +
    "description TEXT, " +
    "factorRiskmodexpo TEXT, " +
    "factorEquiexpotime TEXT, " +
    "PRIMARY KEY(silid)" +
    ")";

  public static TABLE_SECTION = "CREATE TABLE IF NOT EXISTS MTSection (" +
    "sectionid VARCHAR(50)," +
    "code TEXT, " +
    "name TEXT, " +
    "modifieddate INTEGER(20), " +
    "modifiedby TEXT, " +
    "PRIMARY KEY(sectionid)" +
    ")";

  public static TABLE_SECTION_DU_ZONE_MAP = "CREATE TABLE IF NOT EXISTS MTSectionDUZoneMap (" +
    "sectionduzonemapid VARCHAR(50)," +
    "duzonemapid VARCHAR(50)," +
    "sectionid VARCHAR(50)," +
    "modifieddate INTEGER(20), " +
    "modifiedby TEXT, " +
    "PRIMARY KEY(sectionduzonemapid)" +
    ")";

  public static TABLE_ZONE = "CREATE TABLE IF NOT EXISTS MTZone (" +
    "zoneid VARCHAR(50)," +
    "description TEXT, " +
    "short TEXT, " +
    "PRIMARY KEY(zoneid)" +
    ")";

  public static TABLE_USER_PERMISSION_MAP = "CREATE TABLE IF NOT EXISTS UserPermissionMap (" +
    "userpermissionmapid VARCHAR(50)," +
    "userid VARCHAR(50)," +
    "duzonemapid VARCHAR(50), " +
    "status TEXT, " +
    "PRIMARY KEY(userpermissionmapid)" +
    ")";

  public static Table_MTEllipse_Task_MstJob_Desc = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstJobDesc (" +
    "mstjobdescid VARCHAR(50)," +
    "mstjobdescdescription VARCHAR(50), " +
    "PRIMARY KEY(mstjobdescid)" +
    ")";

  public static Table_MTEllipse_TaskMst_Component = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstComponent (" +
    "mstcomponentid VARCHAR(50)," +
    "mstcomponentcode VARCHAR(50)," +
    "mstcomponentdescription VARCHAR(50), " +
    "PRIMARY KEY(mstcomponentid)" +
    ")";

  public static Table_MTEllipse_TaskMst_CompModifier = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMstCompModifier (" +
    "mstcompmodifierid VARCHAR(50)," +
    "mstcompmodifiercode VARCHAR(50)," +
    "mstcompmodifierdescription VARCHAR(50), " +
    "PRIMARY KEY(mstcompmodifierid)" +
    ")";

  public static TABLE_MTELLIPSETASKMNT = "CREATE TABLE IF NOT EXISTS MTEllipseTaskMnt (" +
    "mntid VARCHAR(50)," +
    "mntcode VARCHAR(50)," +
    "mntdescription VARCHAR(50), " +
    "PRIMARY KEY(mntid)" +
    ")";
  public static TABLE_ASSESSMENT_TRAIL = "CREATE TABLE IF NOT EXISTS AssessmentTrail ( " +
    "assessmentTrailId  VARCHAR(50)," +
    "assessmentid  VARCHAR(50)," +
    "comments  TEXT," +
    "isMoreDtl  INTEGER(20)," +
    "traildate  INTEGER(20)," +
    "userid  INTEGER(10)," +
    "PRIMARY KEY(assessmentTrailId)" +
    ")";

  public static TABLE_ASSESSMENT_TRAIL_DETAIL = "CREATE TABLE IF NOT EXISTS AssessmentTrailDtl ( " +
    "assessmentTrailDtlId  VARCHAR(50)," +
    "assessmentTrailId  VARCHAR(50)," +
    "oldValue  TEXT," +
    "newValue  TEXT," +
    "PRIMARY KEY(assessmentTrailDtlId)" +
    ")";

  public static TABLE_ASSESSMENT_TRAIL_DETAIL_TEMP = "CREATE TABLE IF NOT EXISTS AssessmentTrailDetailTemp ( " +
    "assessmentTrailDtlId  VARCHAR(50)," +
    "trailType  number(20)," +
    "assessmentid  VARCHAR(50)," +
    "oldValue  TEXT," +
    "newValue  TEXT," +
    "PRIMARY KEY(assessmentTrailDtlId)" +
    ")";

}



