export default function Team() {

    const teams = [
        {
            id: 0,
            title: "Coordinators",
            members: [
                {
                    id: 1,
                    name: "P S Rishi",
                    batch: "2022",
                },
                {
                    id: 2,
                    name: "Pratyaksh Patel",
                    batch: "2022"
                },
                {
                    id: 3,
                    name: "Vivek Kumar",
                    batch: "2022"
                },
            ]
        },
        {
            id: 1,
            title: "Core Members",
            members: [
                {
                    id: 4,
                    name: "Person 1",
                    batch: "NA"
                },
                {
                    id: 5,
                    name: "Person 2",
                    batch: "NA"
                },
                {
                    id: 6,
                    name: "Person 3",
                    batch: "NA"
                },
                {
                    id: 7,
                    name: "Person 4",
                    batch: "NA"
                },
                {
                    id: 8,
                    name: "Person 5",
                    batch: "NA"
                },
                {
                    id: 9,
                    name: "Person 6",
                    batch: "NA"
                },
            ]
        }
    ]

    return (
        <div className={'min-h-screen mb-24 flex flex-col text-black items-center justify-center text-center'}>
            {teams.map(team => (
                <div key={team.id}>
                    <div className={'relative flex items-center justify-center'}>
                        <div className={'w-full h-[1px] bg-neutral-500 z-[0] absolute'}/>
                        <h1 className={'text-black font-bold text-4xl z-[10]  uppercase bg-white px-6 mt-12 mb-12'}>{team.title}</h1>
                    </div>
                    <div className={'grid grid-cols-1 justify-center place-items-center md:grid-cols-3 gap-12'}>

                        {
                            team.members.map(member => (
                                <div key={member.id} className={''}>
                                    <img className={'shadow-md rounded-xl'}
                                         src={`https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_${member.id}.png`}/>
                                    <h2 className={'mt-6 font-bold'}>{member.name}</h2>
                                    <h2 className={'mt-2'}>Batch {member.batch}</h2>
                                </div>

                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}