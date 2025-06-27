export interface UniversityColors {
  primary: string
  secondary: string
  gradient: string
}

export const universityColors: Record<string, UniversityColors> = {
  "Chulalongkorn University": {
    primary: "#de5c8e", // pink
    secondary: "#f694ba", // white pink
    gradient: "linear-gradient(170deg, #de5c8e 0%, #f694ba 100%)",
  },
  "King Mongkut's Ladkrabang": {
    primary: "#e35205", // orange
    secondary: "#e35205", // white orange
    gradient: "linear-gradient(135deg, #e35205 0%, #f58e56 100%)",
  }
}

export function getUniversityColors(universityName: string): UniversityColors {
  return (
    universityColors[universityName] || {
      primary: "#8C1515", // Default red
      secondary: "#DC143C", // Default white red
      gradient: "linear-gradient(135deg, #8C1515 0%, #DC143C 100%)",
    }
  )
}
