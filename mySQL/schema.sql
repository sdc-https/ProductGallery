CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  image_url VARCHAR(255),
  tag_id INT
);

CREATE TABLE tags (
  id INT,
  tag_body VARCHAR(255)
);


