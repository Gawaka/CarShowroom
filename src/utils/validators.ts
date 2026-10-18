import { Form, Field } from 'react-final-form';

export const required = (value?: string): string | undefined => {
    return value && value.trim().length > 0 ? undefined : "Це поле є обов'язковим";
};

export const maxLength = (max: number) => (value?: string): string | undefined => {
    return value && value.length > max ? `Максимум ${max} символів` : undefined;
};