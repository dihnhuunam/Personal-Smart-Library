CREATE TABLE library.Statistic (
    StatisticID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    CategoryID INT NOT NULL,
    TotalBooksRead INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (CategoryID) REFERENCES BookCategory(CategoryID)
);