'use client';
//= I18n
import useDictionary from "@/dictionaries/clientDictionary";
//= Styles
import cls from './styles.module.scss';

type Props = {
  label?: string
  value: string
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function DateInput({ label, value, onChange, name }: Props) {
  const { translations, locale } = useDictionary();

  return (
    <div className={cls.form_group}>
      {label && <label htmlFor={`datepicker-${name}`}>{label}</label>}
      <div className={`${cls.field} ${locale === 'ar' ? cls.ar : ''}`}>
        <input type="date" name={name || ''} value={value} onChange={onChange} id={`datepicker-${name}`} />
      </div>
    </div>
  )
}

export default DateInput;
