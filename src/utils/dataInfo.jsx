import {big, medium, low} from '../components/Mainpage/Info/InfoItem/InfoItem.module.scss'
import {biggest, middle, lowest} from '../components/Mainpage/Info/Info.module.scss'
export const dataInfo = [
    {
        title: 'Предпринимателю',
        elements: [
            {text: 'Государственная поддержка бизнеса в регионе'},
            {text: 'Единое окно для предпринимателей в Ярославской области'},
            {text: 'Необходимая информация о ведении бизнеса в Ярославской области'}
        ],
        size: big,
        gap: biggest,
    },
    {
        title: 'Инвесторам',
        elements: [
            {text: 'Государственная поддержка инвестиций в регионе'},
            {text: 'Инвестиционный климат в Ярославской области'},
            {text: 'Площадки и промышленные парки в регионe'},
            {text: 'Единое окно для инвесторов в Ярославской области'}
        ],
        size: medium,
        gap: middle,
    },
    {
        title: 'Социально ориентированным некоммерческим организациям',
        elements: [
            {text: 'Государственная поддержка СОНКО'},
            {text: 'Информационная поддержка СОНКО'},
            {text: 'Транспортная поддержка СОНКО'},
            {text: 'Финансовая поддержка СОНКО'},
            {text: 'Поддержка благотворительной деятельности'}
        ],
        size: low,
        gap: lowest,
    }
]

