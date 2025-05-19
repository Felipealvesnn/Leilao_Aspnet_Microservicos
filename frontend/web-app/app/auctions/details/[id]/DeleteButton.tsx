/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { deleteAuction } from '@/app/actions/auctionsActions'
import { Button } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

type Props = {
    id: string
}

export default function DeleteButton({id}: Props) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    function doDelete() {
        setLoading(true);
        deleteAuction(id)
            .then((res: { error: any }) => {
                if (res.error) throw res.error;
                router.push('/');
            }).catch((error: any) => {
                toast.error(error.status + ' ' + error.message)
            }).finally(() => setLoading(false));
    }

    return (
        <Button color='failure' disabled={loading} onClick={doDelete}>
            {loading ? 'Deleting...' : 'Delete Auction'}
        </Button>
    )
}