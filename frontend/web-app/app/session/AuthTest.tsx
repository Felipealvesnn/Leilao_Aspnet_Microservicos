'use client'

import React, { useState } from 'react'
import { Button, Spinner } from 'flowbite-react'
import { updateAuctionTest } from '../actions/auctionsActions'

export default function AuthTest() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<unknown>()

  function doUpdate() {
    setResult(undefined)
    setLoading(true)
    updateAuctionTest()
      .then(res => setResult(res))
      .catch(err => setResult(err))
      .finally(() => setLoading(false))
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        outline
        onClick={doUpdate}
        disabled={loading}                  // 1) desabilita durante o loading
      >
        {loading
          ? (
            <><Spinner size="sm" className="mr-2" aria-label="Loading" />Carregando…</>
          )
          : 'Test auth'
        }
      </Button>
      <pre className="bg-gray-100 p-2 rounded w-full">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  )
}
