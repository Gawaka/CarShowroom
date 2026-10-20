import { Box, TextField, MenuItem, Button } from "@mui/material";
import { Form, Field } from "react-final-form";
import type { FilterValues } from "../types/vehicle";
import { maxLength } from "../utils/validators";

interface VehicleFilterFormProps {
	onFilterChange: (values: FilterValues) => void;
};

export function VehicleFilterForm({onFilterChange}: VehicleFilterFormProps) {
	const initialValues: FilterValues = {
		search: "",
		sortBy: "default",
	};

	return (
		<Form<FilterValues>
			onSubmit={onFilterChange}
			initialValues={initialValues}
			render={({ handleSubmit, form }) => (
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						bgcolor: "#fff",
						border: "1px solid #e2e8f0",
						borderRadius: 2,
						p: 2,
						mb: 3,
						boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						alignItems: { xs: "stretch", md: "flex-start" },
						gap: 2,
					}}
				>
					<Field
						name="search"
						validate={maxLength(50)}
					>
						{({ input, meta }) => (
							<TextField
								{...input}
								label="Пошук за назвою або брендом"
								placeholder="Наприклад: Charger, Chrysler..."
								size="small"
								sx={{ flex: 2 }}
								helperText={
									meta.error || "Максимум 50 символів"
								}
							/>
						)}
					</Field>
					<Field name="sortBy">
						{({ input }) => (
							<TextField
								{...input}
								select
								label="Сортування за ціною"
								size="small"
								sx={{ flex: 1 }}
								helperText=" "
							>
								<MenuItem value="default">
									За замовчуванням
								</MenuItem>
								<MenuItem value="price-asc">
									Від дешевших до дорожчих
								</MenuItem>
								<MenuItem value="price-desc">
									Від дорожчих до дешевших
								</MenuItem>
							</TextField>
						)}
					</Field>
					<Box
						sx={{
							display: "flex",
							gap: 1,
							pt: { xs: 0, md: "2px" },
						}}
					>
						<Button
							type="submit"
							variant="contained"
							sx={{ textTransform: "none", fontWeight: 600 }}
						>
							Знайти
						</Button>
						<Button
							type="button"
							variant="outlined"
							onClick={() => {
								form.reset();
								onFilterChange(initialValues);
							}}
							sx={{ textTransform: "none", fontWeight: 600 }}
						>
							Скинути
						</Button>
					</Box>
				</Box>
			)}
		/>
	);
};