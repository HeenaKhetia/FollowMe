import React from 'react'

function SideMenu() {
    return (
        <div class="card">
            <article class="card-group-item">
                <header class="card-header">
                    <h6 class="title">Brands </h6>
                </header>
                <div class="filter-content">
                    <div class="card-body">
                        <form>
                            <label class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />
                                <span class="form-check-label">
                                    Mersedes Benz
				  </span>
                            </label>
                            <label class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />
                                <span class="form-check-label">
                                    Nissan Altima
				  </span>
                            </label>
                            <label class="form-check">
                                <input class="form-check-input" type="checkbox" value="" />
                                <span class="form-check-label">
                                    Another Brand
				  </span>
                            </label>
                        </form>

                    </div>
                </div>
            </article>
        </div>

    )
}

export default SideMenu
