<<<<<<< HEAD
import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          <span>🍱</span> FoodShare
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/donate">Donate Food</Link>
          <Link to="/donations">Available Food</Link>
          <Link to="/about">About</Link>
        </div>

        <button className="login-btn">
          Login
        </button>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="tagline">
              MAKE A DIFFERENCE TODAY
            </p>

            <h1>
              Share Food.
              <br />
              <span>Spread Hope.</span>
            </h1>

            <p className="description">
              Your extra food can become someone's meal.
              Donate food and help us reduce food waste
              while feeding people in need.
            </p>

            <div className="hero-buttons">
              <Link
                to="/donate"
                className="donate-btn"
              >
                Donate Food
              </Link>

              <Link
                to="/donations"
                className="explore-btn"
              >
                Explore Donations
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <div className="food-card">
              🍲
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <h2>1,250+</h2>
            <p>Meals Donated</p>
          </div>

          <div>
            <h2>450+</h2>
            <p>Active Donors</p>
          </div>

          <div>
            <h2>120+</h2>
            <p>Volunteers</p>
          </div>

          <div>
            <h2>35+</h2>
            <p>Partner NGOs</p>
          </div>
        </section>
      </main>
    </>
  )
}

function Donate() {
  const [foodName, setFoodName] = useState("")
  const [foodType, setFoodType] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [availableUntil, setAvailableUntil] = useState("")
  const [location, setLocation] = useState("")
  const [details, setDetails] = useState("")

  const [donation, setDonation] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    const newDonation = {
      foodName,
      foodType,
      category,
      quantity,
      availableUntil,
      location,
      details
    }

    setDonation(newDonation)
  }

  return (
    <div className="donate-page">
      <div className="donate-container">

        <div className="donate-header">
          <p>FOOD DONATION</p>

          <h1>Donate Your Extra Food</h1>

          <span>
            Fill in the details below so someone can receive
            your food.
          </span>
        </div>

        <form
          className="donate-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>Food Name</label>

            <input
              type="text"
              placeholder="Example: Rice, Roti, Biryani"
              value={foodName}
              onChange={(e) =>
                setFoodName(e.target.value)
              }
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Food Type</label>

              <select
                value={foodType}
                onChange={(e) =>
                  setFoodType(e.target.value)
                }
              >
                <option value="">
                  Select food type
                </option>

                <option value="Cooked Food">
                  Cooked Food
                </option>

                <option value="Packaged Food">
                  Packaged Food
                </option>

                <option value="Fruits">
                  Fruits
                </option>

                <option value="Vegetables">
                  Vegetables
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Food Category</label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
              >
                <option value="">
                  Select category
                </option>

                <option value="Veg">
                  Veg
                </option>

                <option value="Non-Veg">
                  Non-Veg
                </option>
              </select>
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Quantity</label>

              <input
                type="number"
                placeholder="Example: 20"
                value={quantity}
                onChange={(e) =>
                  setQuantity(e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>Available Until</label>

              <input
                type="datetime-local"
                value={availableUntil}
                onChange={(e) =>
                  setAvailableUntil(e.target.value)
                }
              />
            </div>

          </div>

          <div className="form-group">
            <label>Pickup Location</label>

            <input
              type="text"
              placeholder="Enter pickup location"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Additional Details</label>

            <textarea
              rows="4"
              placeholder="Tell us something about the food..."
              value={details}
              onChange={(e) =>
                setDetails(e.target.value)
              }
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Donate Food
          </button>

        </form>

        {donation && (
          <div className="donation-result">

            <h2>
              Donation Added Successfully 🎉
            </h2>

            <div className="donation-card">

              <h3>
                {donation.foodName}
              </h3>

              <p>
                <strong>Food Type:</strong>{" "}
                {donation.foodType}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {donation.category}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {donation.quantity}
              </p>

              <p>
                <strong>Available Until:</strong>{" "}
                {donation.availableUntil}
              </p>

              <p>
                <strong>Pickup Location:</strong>{" "}
                {donation.location}
              </p>

              <p>
                <strong>Details:</strong>{" "}
                {donation.details}
              </p>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/donate"
          element={<Donate />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
=======
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div>
      <h1>Hello React</h1>

      <button onClick={handleClick}>
        Click Me
      </button>

      {clicked && (
        <>
          <h2>Don't Let Good Food Go To Waste</h2>

          <p>
            Share your extra food today and become a part
            of the FoodShare community.
          </p>

          <div className="cta-buttons">
            <Link
            
            >
              Donate Food
            </Link>

            <Link
           
              className="outline-btn"
            >
              Join FoodShare
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
>>>>>>> 0e92c252b664a59c8d9e77f59aeeb5c2f8abc92a
