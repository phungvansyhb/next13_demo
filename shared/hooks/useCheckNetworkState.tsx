"use client"
import React, { useEffect, useState } from 'react'


export default function useCheckNetworkState() {
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
    useEffect(() => {
        const handleOnline = () => {
            console.log('online')
            setIsOnline(true)
        };
        const handleOffline = () => {
            console.log('offline')
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [])
    return isOnline
}