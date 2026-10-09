function Donate() {
  const [foodName, setFoodName] = useState("")
  const [foodType, setFoodType] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [availableUntil, setAvailableUntil] = useState("")
  const [location, setLocation] = useState("")
  const [details, setDetails] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    console.log({
      foodName,
      foodType,
      category,
      quantity,
      availableUntil,
      location,
      details
    })
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
              onChange={(e) => setFoodName(e.target.value)}
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Food Type</label>

              <select
                value={foodType}
                onChange={(e) => setFoodType(e.target.value)}
              >
                <option value="">Select food type</option>
                <option value="Cooked Food">Cooked Food</option>
                <option value="Packaged Food">Packaged Food</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Food Category</label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
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
                onChange={(e) => setQuantity(e.target.value)}
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
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Additional Details</label>

            <textarea
              rows="4"
              placeholder="Tell us something about the food..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Donate Food
          </button>

        </form>
      </div>
    </div>
  )
}