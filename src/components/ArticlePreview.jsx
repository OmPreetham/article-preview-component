import { useState } from 'react'

const ArticlePreview = () => {
  const [selected, setSelected] = useState(false)

  const toggleSelection = () => {
    setSelected(!selected)
  }

  return (
    <div className="wrapper">
      <section>
        <div className="layout-grid">
          <div className="image-wrapper">
            <img src="images/drawers.jpg" alt="Drawers" />
          </div>
          <div className="layout-flex">
            <div className="headline-wrapper">
              <p className="heading">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </p>
              <p className="description">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
            </div>
            <div className="profile-wrapper">
              <div className="profile-data">
                <img src="images/avatar-michelle.jpg" alt="Michelle Appleton" />
                <div className="profile-info">
                  <p className="profile-name">Michelle Appleton</p>
                  <p className="profile-date">28 Jun 2020</p>
                </div>
              </div>
              <div className="share-wrapper">
                <button onClick={toggleSelection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
                  </svg>
                </button>
                {selected && (
                  <div className="share-popup">
                    <p>Share</p>
                    <a href="">
                      <img src="images/icon-facebook.svg" alt="Facebook" />
                    </a>
                    <a href="">
                      {' '}
                      <img src="images/icon-twitter.svg" alt="Twitter" />
                    </a>
                    <a href="">
                      <img src="images/icon-pinterest.svg" alt="Pinterest" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePreview
