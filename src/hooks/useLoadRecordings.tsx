import { useUser } from "@clerk/nextjs";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function useLoadRecordings(call: Call) {
  const { user } = useUser();

  const [recordings, setRecodings] = useState<CallRecording[]>([]);
  const [recordingsLoading, setRecodingsLoading] = useState(true);

  useEffect(() => {
    async function loadRecordings() {
      setRecodingsLoading(true);

      if (!user?.id) return;

      const { recordings } = await call.queryRecordings();

      setRecodings(recordings);

      setRecodingsLoading(false);
    }

    loadRecordings();
  }, [call, user?.id]);

  return { recordings, recordingsLoading };
}
