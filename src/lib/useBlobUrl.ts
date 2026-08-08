import { useEffect, useState } from 'react'

/**
 * An object URL for a Blob, revoked when the blob changes or the component
 * unmounts. Images live in IndexedDB as Blobs, so every screen that shows one
 * needs this — leaking the URLs instead would pin the decoded bitmaps in memory
 * for the life of the tab.
 */
export function useBlobUrl(blob?: Blob | null) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!blob) {
      setUrl(null)
      return
    }
    const u = URL.createObjectURL(blob)
    setUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [blob])

  return url
}
