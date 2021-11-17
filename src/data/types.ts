export type DevicesProps = 'mobile' | 'desktop'

export type WorksProps = {
    section: string
    title: string
    description: string
    label: string
    link: string
    image: string
    type: DevicesProps
}

export type SkillsProps = {
    icon: string
    title: string
    description: string
}
