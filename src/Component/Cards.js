export function Cards({ name, poster ,href}) {
    return (
        <>
            <div class="card col-4-sm"  >
                <img src={poster} class="card-img-top"  alt="#"/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <a className="but" rel="noreferrer" href={href} target="_blank">click here to check the detailed course</a>
                </div>
            </div>
        </>
    )
}
