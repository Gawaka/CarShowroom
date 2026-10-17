import type { Review } from "../types/vehicle";

export const getSavedComments = (vehicleId: number): Review[] => {
    const data = localStorage.getItem(`vehicle_comments_${vehicleId}`);
    if (!data) return [];

    return JSON.parse(data);
};

export const saveComment = (vehicleId: number, newComment: Review): Review[] => {
    const existingComments = getSavedComments(vehicleId);
    const updatedComments = [newComment, ...existingComments];

    localStorage.setItem(`vehicle_comments_${vehicleId}`, JSON.stringify(updatedComments));

    return updatedComments;
};