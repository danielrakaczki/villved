"use-client";
import { useCallback, useEffect, useState } from "react";
import { GetPlaiceholderOptions } from "plaiceholder";
import { getImagePlaceholder, type GetImagePlaceholderReturn } from "../utils/get-plaiceholder";

export const useImagePlaceholder = (path: string, options?: GetPlaiceholderOptions) => {
  const [result, setResult] = useState<GetImagePlaceholderReturn | undefined>(undefined);

  const fetchPlaceholder = useCallback(async () => {
    try {
      const placeholder = await getImagePlaceholder(path, options);
      setResult(JSON.parse(placeholder));
    } catch (error) {
      console.error("Error fetching image placeholder:", error);
      setResult(undefined);
    }
  }, [options, path]);

  useEffect(() => {
    fetchPlaceholder();
  }, [fetchPlaceholder]);

  return result;
};
