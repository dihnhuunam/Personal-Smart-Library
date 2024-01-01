CREATE TABLE library.ReadingProgress (
    ProgressID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT NOT NULL,
    BookID INT NOT NULL,
    CurrentPage INT,
    TotalPages INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (BookID) REFERENCES Book(BookID)
);