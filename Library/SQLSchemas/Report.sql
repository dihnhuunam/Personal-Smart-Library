CREATE TABLE library.Report (
    ReportID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    StartDate DATE,
    EndDate DATE,
    MostReadCategory VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);