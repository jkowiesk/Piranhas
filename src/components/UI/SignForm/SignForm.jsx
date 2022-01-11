import s from './SignForm.module.scss';
import Card from '../Card/Card';
import CustomButton from '../../CustomButton/CustomButton';

export const SignForm = ({children, title, btnText}) => {
    return <Card size="2" title={title} className={s.wrapper}>
        <div className={s.inputs}>
            {children}
        </div>
        <CustomButton type="submit">{btnText}</CustomButton>
    </Card>
}