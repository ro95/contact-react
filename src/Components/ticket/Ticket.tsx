import React from "react";
import "./ticket.css";
import Flight from "../Flight";
import {useSearchParams} from "react-router-dom";

const Ticket = () => {
	const [searchParams] = useSearchParams();
	const firstName = searchParams.get('firstName');
	const lastName = searchParams.get('lastName');

	return (
		<div className="ticket">
			<>
				<div className="boarding-pass">
					<header>
						<svg className="logo">
							<use xlinkHref="#" />
						</svg>
						<div className="flight">
							<small>Vol</small>
							<strong>AZ 356</strong>
						</div>
					</header>
					<section className="cities">
						<div className="city">
							<small>Atrium</small>
							<strong>ATR</strong>
						</div>
						<div className="city">
							<small>ARCS-DE-SEINE</small>
							<strong>ARC</strong>
						</div>
						<svg className="airplane">
							<use xlinkHref="#airplane" />
						</svg>
					</section>
					<section className="infos">
						<div className="places">
							<div className="box">
								<small>Terminal</small>
								<strong>
									<em>G</em>
								</strong>
							</div>
							<div className="box">
								<small>Porte</small>
								<strong>
									<em>8</em>
								</strong>
							</div>
							<div className="box">
								<small>Siège</small>
								<strong>9</strong>
							</div>
							<div className="box">
								<small>Classe</small>
								<strong>A</strong>
							</div>
						</div>
						<div className="times">
							<div className="box">
								<small>Embarquement</small>
								<strong>17h00</strong>
							</div>
							<div className="box">
								<small>Départ</small>
								<strong>17:05</strong>
							</div>
							<div className="box">
								<small>Durée</small>
								<strong>05</strong>
							</div>
							<div className="box">
								<small>Arrivée</small>
								<strong>17:10</strong>
							</div>
						</div>
					</section>
					<section className="strap">
						<div className="box">
							<div className="passenger">
								<small>passagé</small>
								<strong>{firstName} {lastName}</strong>
							</div>
							<div className="date">
								<small>Date</small>
								<strong>Mercredi, 15 nov 2023</strong>
							</div>
						</div>
						<svg className="qrcode">
							<use xlinkHref="#qrcode" />
						</svg>
					</section>
				</div>
				<Flight/>
			</>
		</div>
	);
};

export default Ticket;
