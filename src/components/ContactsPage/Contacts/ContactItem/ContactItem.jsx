import style from "./ContactItem.module.scss";
const ContactItem = ({ name, post, phone, block }) => {
  return (
    <div className={style.contacts__block}>
      <div className={style.images}></div>
      <h4>{name}</h4>
      <div className={block}>{post}</div>
      <button>
        <b>Отправить сообщение</b>
      </button>
      <h5>{phone}</h5>
    </div>
  );
};

export default ContactItem;
