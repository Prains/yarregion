import '../scss/css/Info.css'
import InfoItem from './InfoItem';
const Info = () => {
    return (
      <div className="main">
        <h1>Предпринимателю</h1>
        <div className="biggest">
          <InfoItem
            text="Государственная поддержка
  бизнеса в регионе" block="big"
          />
          <InfoItem
            text="Единое окно для
          предпринимателей 
          в Ярославской области" block="big"
          />
          <InfoItem text="Необходимая информация о ведении бизнеса в Ярославской области" block="big" />
        </div>
        
  
        <h2>Инвесторам</h2>
        <div className="middle">
          <InfoItem
            text="Государственная поддержка
            инвестиций в регионе" block="medium"
          />
          <InfoItem
            text="Инвестиционный климат в Ярославской области" block="medium"
          />
          <InfoItem text="Площадки 
  и промышленные парки
  в регионe" block="medium" />
          <InfoItem text="Единое окно для инвесторов в Ярославской области" block="medium" />
        </div>
  
        <h3>Социально ориентированным некоммерческим организациям</h3>
        <div className="lowest">
          <InfoItem
            text="Государственная поддержка 
            СОНКО" block="low"
          />
          <InfoItem
            text="Информационная поддержка СОНКО" block="low"
          />
          <InfoItem text="Транспортная поддержка СОНКО" block="low" />
          <InfoItem text="Финансовая поддержка СОНКО" block="low" />
          <InfoItem text="Поддержка благотворительной деятельности" block="low" />
        </div>
      </div>
    );
  };
 
export default Info;