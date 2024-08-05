'use client'
 
export default function MarkerEndArrow() {
    return (
        <defs>
            <marker
                id="custom-arrow"
                markerWidth={10}
                markerHeight={10}
                refX={7}
                refY={5}
                orient="auto"
                markerUnits="userSpaceOnUse"
                >
                <path
                d="M1,1 L7,5 L1,9"
                fill="none"
                stroke="#f6bd60"
                strokeWidth={3}
                />
            </marker>
        </defs>
    )
}