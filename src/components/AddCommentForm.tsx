import { Box, TextField, MenuItem, Button, Typography } from '@mui/material';
import { Form, Field } from 'react-final-form';
import type { Review } from '../types/vehicle';
import { required, maxLength } from '../utils/validators';

interface AddCommentFormProps {
    onAddComment: (review: Review) => void;
};

const composeValidators = (...validators: any[]) => (value: any) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

    export function AddCommentForm({ onAddComment }: AddCommentFormProps) {
        const onSubmit = (values: any, form: any) => {
            const newReview: Review = {
                reviewerName: values.reviewerName,
                rating: Number(values.rating),
                comment: values.comment,
                date: new Date().toISOString(),
            };
        onAddComment(newReview);
        
        form.reset();
    };

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ rating: 5 }}
            render={({ handleSubmit, submitting }) => (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: 'flex', 
                        flexDirection: 'column', 
                        gap: 2, 
                        p: 3, 
                        border: '1px solid #e2e8f0', 
                        borderRadius: 2, 
                        bgcolor: '#fff', 
                        mt: 4 
                    }}
                >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>Залишити коментар</Typography>
            <Field name="reviewerName" validate={composeValidators(required, maxLength(40))}>
                {({ input, meta }) => (
                <TextField
                    {...input}
                    label="Ваше ім'я *"
                    size="small"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched ? meta.error : " "}
                />
                )}
            </Field>
            <Field name="rating">
                {({ input }) => (
                <TextField {...input} select label="Оцінка (1-5) *" size="small">
                    <MenuItem value={5}>5 — Відмінно</MenuItem>
                    <MenuItem value={4}>4 — Добре</MenuItem>
                    <MenuItem value={3}>3 — Нормально</MenuItem>
                    <MenuItem value={2}>2 — Погано</MenuItem>
                    <MenuItem value={1}>1 — Жахливо</MenuItem>
                </TextField>
                )}
            </Field>
            <Field name="comment" validate={composeValidators(required, maxLength(300))}>
                {({ input, meta }) => (
                <TextField
                    {...input}
                    multiline
                    rows={3}
                    label="Текст коментаря *"
                    size="small"
                    error={meta.touched && Boolean(meta.error)}
                    helperText={meta.touched ? meta.error : "Максимум 300 символів"}
                />
                )}
            </Field>

            <Button 
                type="submit" 
                variant="contained" 
                disabled={submitting} 
                sx={{ 
                    alignSelf: 'flex-start', 
                    textTransform: 'none', 
                    fontWeight: 600 
                    }}
            >
                Додати коментар
            </Button>
            </Box>
        )}
        />
    );
}