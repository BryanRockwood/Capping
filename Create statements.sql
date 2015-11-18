 --Drop the tables first--
 DROP TABLE IF EXISTS Student CASCADE;
 DROP TABLE IF EXISTS Majors;
 DROP TABLE IF EXISTS DccTrans;
 DROP TABLE IF EXISTS Equivalencies;
 DROP TABLE IF EXISTS Teacher CASCADE;
 DROP TABLE IF EXISTS ChangeLog;
 DROP TABLE IF EXISTS Schools;
 DROP TABLE IF EXISTS DccCourses;
 DROP TABLE IF EXISTS MaristCourses;

--Create statements to instantiate tables--

--Student--
    CREATE TABLE Student (
    StudentID         SERIAL,
    Login             varchar(30) NOT NULL,
    Password          varchar(30) NOT NULL,  	--Password needs to be encrypted--
    First_Name        varchar(20) NOT NULL,
    Last_Name         varchar(20) NOT NULL,
    EmailAddress      varchar(50) NOT NULL,
    Current_College   varchar(50) NOT NULL,
    MaristStartDate   date        NOT NULL,  	--8 fix characters (MM/DD/YYYY)--
    Major_Of_Interest varchar(30) NOT NULL,
    UNIQUE(EmailAddress),
    UNIQUE(Login),
    primary key(StudentID)
    ); 

 --Schools--
    CREATE TABLE Schools (
    SchoolID SERIAL,
    SchoolName varchar(50) NOT NULL,
    SchoolDean varchar(30) NOT NULL,
    UNIQUE(SchoolName),
    UNIQUE(SchoolDean),
    primary key(SchoolID)
    );

 --MaristCourses--
    CREATE TABLE MaristCourses (
    CRN int                     NOT NULL,
    MCourse_Name varchar(50)    NOT NULL,
    MCourse_Subject varchar(4)  NOT NULL,
    MCourse_Credit int          NOT NULL,
    MCourse_CMP varchar(5)      NOT NULL, --these seem to be 3 letters but i'm not sure--
    UNIQUE(MCourse_Name),
    primary key(CRN)
    );

 --Majors-- 
    CREATE TABLE Majors (
    MajorID SERIAL,
    Concentration varchar(30), --should this be not null?--
    MajorName varchar(30) NOT NULL,
    SchoolID int NOT NULL references Schools(SchoolID),
    CRN int NOT NULL references MaristCourses(CRN),
    UNIQUE(MajorName),
    primary key(MajorID, Concentration)
    );

 --DccCourses-- 
    CREATE TABLE DccCourses (
    DccCourseID	SERIAL,
    DccCourse_Name varchar(50) NOT NULL,
    DccCourse_Subject varchar(5) NOT NULL, --these seem to be 3 or 4 letters--
    DccCourse_Credit int NOT NULL,
    UNIQUE (DccCourse_Name),
    primary key(DccCourseID)
    );

 --DccTrans--
    CREATE TABLE DccTrans (
    StudentID int NOT NULL references Student(StudentID),
    DccCourseID	int NOT NULL references DccCourses(DccCourseID),
    primary key(StudentID, DccCourseID)
    );

 --Equivalencies--
    CREATE TABLE Equivalencies (
    CRN int NOT NULL references MaristCourses(CRN),
    DccCourseID	int NOT NULL references DccCourses(DccCourseID),
    primary key(CRN, DccCourseID)
    );

 --Teacher--
    CREATE TABLE Teacher (
    TeacherID SERIAL,
    Login varchar(30) NOT NULL,
    Password varchar(30) NOT NULL,  	--Password needs to be encrypted--
    First_Name varchar(20) NOT NULL,
    Last_Name varchar(20) NOT NULL,
    EmailAddress varchar(50) NOT NULL,
    UNIQUE(Login),
    UNIQUE(EmailAddress),
    primary key(TeacherID)      	
    );

 --ChangeLog--
    CREATE TABLE ChangeLog (
    TeacherID int NOT NULL references Teacher(TeacherID),
    CRN int NOT NULL references MaristCourses(CRN),
    Change_Date timestamp NOT NULL,
    Change_Description varchar(100) NOT NULL,
    primary key(TeacherID, CRN)
    );

    COMMIT;