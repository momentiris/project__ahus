import React, { Component } from 'react';
import { Wrapper, StyledInputBox, InputField, InputLabel, InnerWrap, DisplayInputData, ArrowButton, CustomTextArea,
 Selector} from './styles.js';

class InputBox extends React.Component {
	constructor(props) {
		super();
		this.state = {
			...props,
		}
	}

	render() {
		const {pos, issue, text, underline, getInputValue} = this.state;

		return (
					<StyledInputBox>
						{
							this.state.pos === 0 && (
								<React.Fragment>
						<h2 style={{textAlign: 'center '}}>{ text } <span style={{borderBottom: '2px solid black', padding: '0px 1rem 5px 1rem'}}>{underline}</span>
						</h2>
						<InputLabel for="building">Byggnad</InputLabel>
						<Selector name="building"  value={issue.building} onChange={ getInputValue }>
							<option disabled selected value={issue.building}> -- Välj en byggnad -- </option>
							<option value="Kårhuset">Kårhuset</option>
							<option value="Drift & Informationsteknik">Drift & Informationsteknik</option>
						</Selector>
						<InputLabel for="roomnumber">Rumsnr</InputLabel>
						<InputField onChange={ getInputValue } type="text" name="roomnumber" width="50%" placeholder="Välj rumsnummer"></InputField>
						</React.Fragment>
						)
					}

					{
						this.state.pos === 1 && (
							<React.Fragment>
					<h2 style={{textAlign: 'center '}}>{ text } <span style={{borderBottom: '2px solid black', padding: '0px 1rem 5px 1rem'}}>{underline}</span>
					</h2>
					<InputLabel for="title">Rubrik:</InputLabel>
					<InputField onChange={ getInputValue } type="text"  name="title" width="100%" placeholder="Rubrik"></InputField>

					<InputLabel for="text">Beskrivning*</InputLabel>
					<CustomTextArea placeholder="Skriv..." onChange={ getInputValue } name="text" id="text" cols="30" rows="10"></CustomTextArea>

					</React.Fragment>

				)
				}

				{
					this.state.pos === 2 && (
						<React.Fragment>
				<h2 style={{textAlign: 'center '}}>{ text } <span style={{borderBottom: '2px solid black', padding: '0px 1rem 5px 1rem'}}>{underline}</span>
				</h2>
				<InputLabel for="name">Namn*</InputLabel>
				<InputField onChange={ getInputValue } type="text" name="name" width="100%" placeholder="Namn"></InputField>

				<InputLabel for="email">Email*</InputLabel>
				<InputField onChange={ getInputValue } type="email" name="email" width="100%" placeholder="Email"></InputField>

				<InputLabel for="telephone">Telefonnummer*</InputLabel>
				<InputField onChange={ getInputValue } type="telephone" name="telephone" width="50%" placeholder="Telefonnummer"></InputField>
				</React.Fragment>

			)
			}
					</StyledInputBox>

		)
	}


}

export default InputBox;
