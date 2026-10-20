import { Card, CardMedia, CardContent, Typography, Button, Box, Chip} from "@mui/material";
import { Link } from "react-router-dom";
import type { Vehicle } from "../types/vehicle";

interface VehicleCardProps {
	vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
	return (
		<Card
			component="article"
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				borderRadius: 2,
				boxShadow: "0 1px 3px rgba(15, 23, 42, 0.08)",
				border: "1px solid #e2e8f0",
			}}
		>
			<CardMedia
				component="img"
				height="190"
				image={vehicle.thumbnail}
				alt={vehicle.title}
				sx={{ objectFit: "cover", borderBottom: "1px solid #e2e8f0" }}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					gap: 1,
					p: 2,
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Chip
						label={vehicle.brand || "Auto"}
						size="small"
						sx={{
							bgcolor: "#eff6ff",
							color: "#1d4ed8",
							fontWeight: 600,
						}}
					/>
					<Typography
						sx={{ color: "#f59e0b", fontWeight: 700, fontSize: 14 }}
					>
						★ {vehicle.rating}
					</Typography>
				</Box>
				<Typography
					variant="h6"
					component="h2"
					sx={{ fontWeight: 700, fontSize: 18 }}
				>
					{vehicle.title}
				</Typography>
				<Typography
					variant="body2"
					color="text.secondary"
					sx={{
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical",
						overflow: "hidden",
					}}
				>
					{vehicle.description}
				</Typography>
				<Box
					sx={{
						mt: "auto",
						pt: 1.5,
						borderTop: "1px solid #e2e8f0",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Typography sx={{ fontSize: 18, fontWeight: 800 }}>
						${vehicle.price.toLocaleString()}
					</Typography>

					<Button
						component={Link}
						to={`/vehicles/${vehicle.id}`}
						variant="contained"
						size="small"
						sx={{ textTransform: "none", fontWeight: 600 }}
					>
						Детальніше
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}
