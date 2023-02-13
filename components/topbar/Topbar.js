import Styles from "./topbar.module.css"

export default function Topbar(){

    return (
        <div className="col-12 col-lg-12 header-top bg-primary py-2">
            <div className="col-12 col-lg-12 container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-white" style={{cursor : "pointer"}}>
                        IMDB Movies
                    </div>
                </div>
            </div>
        </div>
    )

}