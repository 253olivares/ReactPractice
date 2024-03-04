import React from 'react'

// Outdated method
// export const Section: React.FunctionComponent<{title:string}> = ({children,title}) => {
//     return(
//         <section>
//             <h2>{title}</h2>
//             <p>{children}</p>
//         </section>
//     )
// }

// up to date method

type SectionProps = {
    title?:string,
    children: React.ReactNode
}

export const Section = ({children, title = "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}