import { createImageUrlBuilder, createCurrentUseHook, createClient } from 'next-sanity';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production'
}