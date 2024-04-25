interface CropData {
    year: string;
    cropName: string;
    cropProduction: number;
    yieldOfCrops: number;
    areaUnderCultivation: number;
  }
  
  export const processData = (data: any[]): CropData[] => {
    return data.map((item: any) => ({
      year: item.Year,
      cropName: item['Crop Name'],
      cropProduction: parseFloat(item['Crop Production (UOM:t(Tonnes))']),
      yieldOfCrops: parseFloat(item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']),
      areaUnderCultivation: parseFloat(item['Area Under Cultivation (UOM:Ha(Hectares))'])
    }));
  };
  
  export const getCropMaxMinData = (data: CropData[]): { year: string; maxCrop: string; minCrop: string }[] => {
    const maxMinData: { year: string; maxCrop: string; minCrop: string }[] = [];
    const years = Array.from(new Set(data.map(item => item.year)));
    
    years.forEach(year => {
      const cropsOfYear = data.filter(item => item.year === year);
      const maxCrop = cropsOfYear.reduce((prev, curr) => (prev.cropProduction > curr.cropProduction) ? prev : curr).cropName;
      const minCrop = cropsOfYear.reduce((prev, curr) => (prev.cropProduction < curr.cropProduction) ? prev : curr).cropName;
      maxMinData.push({ year, maxCrop, minCrop });
    });
  
    return maxMinData;
  };
  
  export const getCropAverageData = (data: CropData[]): { crop: string; avgYield: number; avgArea: number }[] => {
    const avgData: { crop: string; avgYield: number; avgArea: number }[] = [];
    const crops = Array.from(new Set(data.map(item => item.cropName)));
    
    crops.forEach(crop => {
      const cropData = data.filter(item => item.cropName === crop);
      const avgYield = cropData.reduce((sum, item) => sum + item.yieldOfCrops, 0) / cropData.length;
      const avgArea = cropData.reduce((sum, item) => sum + item.areaUnderCultivation, 0) / cropData.length;
      avgData.push({ crop, avgYield, avgArea });
    });
  
    return avgData;
  };
  