'use client';
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Styles
import cls from './styles.module.scss';

type Props = {
  label: string;
  value: string;
  name?: string;
  onChange: () => void;
}

function TimeInput({ label, value, name, onChange }: Props) {
  const { locale } = useDictionary();

  return (
    <div className={cls.form_group}>
      <label>{label}</label>
      <div className={`${cls.field} ${locale === 'ar' ? cls.ar : ''}`}>
        <input type="time" value={value} onChange={onChange} name={name || ''} />
      </div>
    </div>
  )
}

export default TimeInput;
