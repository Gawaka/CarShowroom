import { useState } from 'react';
import { Box, Typography, CircularProgress, Alert, Button, Chip } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getVehicleById } from '../api/vehiclesApi';
import { getSavedComments } from '../utils/localStorage';
import { AddCommentForm } from '../components/AddCommentForm';
import { saveComment } from '../utils/localStorage';
import type { Review } from '../types/vehicle';

export function VehicleDetailsPage() {
    const { vehicleId } = useParams();
    const idNumber = Number(vehicleId);
    const [localComments, setLocalComments] = useState<Review[]>(() => getSavedComments(idNumber));

    const { data, isLoading, isError } = useQuery({
        queryKey: ['vehicle', vehicleId],
        queryFn: () => getVehicleById(idNumber),
    });

    const handleAddComment = (newReview: Review)=> {
        const updatedComments = saveComment(idNumber, newReview);
        setLocalComments(updatedComments);
    };

    const allComments = [...localComments, ...(data?.reviews || [])];

    if (isLoading) return <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress /></Box>;
    if (isError || !data) return <Alert severity="error" sx={{ mt: 3 }}>Помилка завантаження авто.</Alert>;

    return (
        <Box>
        <Button component={Link} to="/" sx={{ mb: 3, fontWeight: 600, textTransform: 'none' }}>
            ← Назад до каталогу
        </Button>
        <Box 
            component="section" 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' }, 
                gap: 3, bgcolor: '#fff', p: 3, 
                borderRadius: 2, 
                border: '1px solid #e2e8f0', 
                mb: 4 
            }}>
            <Box
                component="img" 
                src={data.images[0] || data.thumbnail} 
                alt={data.title} 
                sx={{ 
                    width: { xs: '100%', md: '50%' }, 
                    height: 320, 
                    objectFit: 'cover', 
                    borderRadius: 1, 
                    bgcolor: '#f8fafc' 
                }} 
            />
            <Box sx={{ 
                    flex: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2 
                }}>
                <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                    }}>
                    <Chip label={data.brand || 'Auto'} sx={{ bgcolor: '#eff6ff', color: '#1d4ed8', fontWeight: 600 }} />
                    <Typography sx={{ color: '#f59e0b', fontWeight: 700 }}>★ {data.rating} / 5</Typography>
                </Box>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>{data.title}</Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: 800, color: '#1976d2' }}>${data.price.toLocaleString()}</Typography>
                    <Typography color="text.secondary">{data.description}</Typography>
            </Box>
        </Box>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                Відгуки та коментарі ({allComments.length})
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {allComments.map((coment, index)=> (
                        <Box key={index} 
                            component="article" 
                            sx={{ p: 2, 
                                border: '1px solid #e2e8f0', 
                                borderRadius: 2, 
                                bgcolor: '#fff' 
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography sx={{ fontWeight: 700 }}>{coment.reviewerName}</Typography>
                            <Typography sx={{ color: '#f59e0b', fontWeight: 700 }}>★ {coment.rating}</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ mb: 1 }}>{coment.comment}</Typography>
                            <Typography variant="caption" color="text.secondary">
                                {new Date(coment.date).toLocaleDateString()}
                            </Typography>
                        </Box>
                        ))
                    }
                </Box>
            </Box>
            <AddCommentForm onAddComment={handleAddComment}/>
        </Box>
    );
};