import { useState } from "react";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { getVehicles } from "../api/vehiclesApi";
import { useQuery } from "@tanstack/react-query";
import { VehicleCard } from "../components/VehicleCard";
import { VehicleFilterForm } from "../components/VehicleFilterForm";
import type { FilterValues } from "../types/vehicle";

export function HomePage() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["vehicles"],
		queryFn: getVehicles,
	});
	const [filters, setFilters] = useState<FilterValues>({
		search: '',
		sortBy: 'default',
	});
	
	const handleFilterChange = (newValues: FilterValues)=> {
		setFilters(newValues);
	};

	let displayedVehicles = data?.products || [];

	if (filters.search) {
		const searchQuery  = filters.search.toLocaleLowerCase().trim();
		displayedVehicles = displayedVehicles.filter(vehicle=> {
			const matchBrand = vehicle.brand?.toLocaleLowerCase().includes(searchQuery);
			const matchTitle = vehicle.title?.toLocaleLowerCase().includes(searchQuery);
			
			return matchBrand || matchTitle;
		});
	};

	if (filters.sortBy !== 'default') {
			displayedVehicles = [...displayedVehicles].sort((a, b) => {
				if (filters.sortBy === 'price-asc') return a.price - b.price;
				if (filters.sortBy === 'price-desc') return b.price - a.price;
				return 0;
			});
		};

	const errorMessage = isError ? (<Alert severity="error">Помилка завантаження автомобілів. Спробуйте оновити сторінку.</Alert>) : null;
	const loadMessage = !isError && isLoading ? (<Box sx={{ display: "flex", justifyContent: "center", py: 8 }}><CircularProgress/></Box>) : null;

	return (
		<Box>
			<Typography
				variant="h4"
				component="h1"
				sx={{ fontWeight: 700, mb: 3, fontSize: { xs: 24, md: 32 } }}
			>
				Каталог автомобілів
			</Typography>
			<VehicleFilterForm onFilterChange={handleFilterChange} />
			{errorMessage}
			{loadMessage}
			{!isLoading && displayedVehicles.length === 0 && !isError && (
                <Alert severity="info" sx={{ mb: 3 }}>За вашим запитом автомобілі не знайдено.</Alert>
			)}
			<Box
				component="section"
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, 1fr)",
						md: "repeat(3, 1fr)",
					},
					gap: { xs: 2, md: 3 },
				}}
			>
				{displayedVehicles.map((item) => (
					<VehicleCard key={item.id} vehicle={item} />
				))}
			</Box>
		</Box>
	);
};
