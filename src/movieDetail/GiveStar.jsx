import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import styles from "./GiveStar.module.css";

const GiveStar = () => {
  return (
    <div className={styles.container}>
      <Card.Img src="https://via.placeholder.com/20x30" />
      <Button variant="outline-dark" className={styles.GiveStarButton}>
        별점주기
      </Button>
    </div>
  );
};

export default GiveStar;
