import styles from "./TextBox.module.css";

const TextBox = ({ handelKeyDown }) => {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Food items here"
        onKeyDown={handelKeyDown}
      />
    </>
  );
};

export default TextBox;
