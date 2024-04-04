import React from "react";
import axios from "axios";

export const UrlViaCep = axios.create({
	baseURL: "https://viacep.com.br/ws/",
	headers: {
		"Content-Type": "application/json",
	},
});
