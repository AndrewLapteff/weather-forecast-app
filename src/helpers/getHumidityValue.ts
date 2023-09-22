export const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Dry and comfortable'
  if (level > 55 && level <= 65) return 'A bit uncomfortable, sticky feeling'

  return 'Lots of moisture, uncomfortable air'
}