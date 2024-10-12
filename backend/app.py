from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/calculate', methods=['POST'])
def calculate_shares():
    # Receive the JSON data from the form
    data = request.get_json()
    print(data)
#     propertyOwner : husband
# //  propertyValue : 1
# //  numberOfSons : 2
# //  numberOfDaughters : 3
# //  burialAmount : 5
# //  loanAmount : 5

# //  spouseAlive : yes
# //  fatherAlive : yes
# //  motherAlive : yes
# //  numberOfBrothers : 6
# //  numberOfSisters : 7

    # Extracting the values from the received data
    property_owner = data.get('properOwner')
    spouse_alive = data.get('spouseAlive')
    father_alive = data.get('fatherAlive')
    mother_alive = data.get('motherAlive')
    
    # converting string to number
    property_value = float(data.get('propertyValue', 0))
    burial_amount = float(data.get('burialAmount', 0))
    loan_amount = float(data.get('loanAmount', 0))
    no_of_sons = int(data.get('numberOfSons', 0))
    no_of_daughters = int(data.get('numberOfDaughters', 0))
    no_of_brothers = int(data.get('numberOfBrothers', 0))
    no_of_sisters = int(data.get('numberOfSisters', 0))
    
    
    # Remaining property after burial and loan amounts
    remaining_property = property_value - burial_amount - loan_amount

    #  logic to calculate inheritance shares 
    # son_share = 
    # daughter_share =
    # spouse_share =
    # father_share
    # mother_share
    # brother_share
    # sister_share
    
    # Create a dictionary with the calculated shares
    response_data = {
        'sonShare': son_share,
        'daughterShare': daughter_share,
        'spouseShare': spouse_share,
        'fatherShare': father_share,
        'motherShare': mother_share,
        'brotherShare': brother_share,
        'sisterShare': sister_share,
        'remainingProperty': remaining_property,
 
    }
    print(response_data)
    # Send back the response as JSON
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
