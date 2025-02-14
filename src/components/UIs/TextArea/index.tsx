'use client';
//= Styles
import cls from './styles.module.scss';

type Props = {
  label?: string
  placeholder?: string;
  height?: string;
  name: string;
  value: string;
  onChange?: () => void;
  disabled?: boolean
}

function TextArea({ label, placeholder, name, value, onChange, disabled }: Props) {

  return (
    <div className={cls.form_group}>
      {label && <label htmlFor={`input-${name}`}>{label}</label>}
      <div className={cls.field}>
        <textarea disabled={disabled} id={`input-${name}`} placeholder={placeholder || ""} name={name} value={value || ''} onChange={onChange} />
      </div>
    </div>
  )
}

export default TextArea;
