import css from "./Notification.module.css";
const Notification = ({ isOpen }) => {
  return (
    <div>
      {isOpen === true ? (
        <p className={css.close}>No feetback yet</p>
      ) : (
        <p className={css.open}>No feetback yet</p>
      )}
    </div>
  );
};

export default Notification;
