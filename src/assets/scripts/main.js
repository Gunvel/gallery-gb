'use strict';

import { LoadCard } from "./cardLoader.js";
import items from "./items.js";

const cartContainer = document.querySelector(".container");

items.map(item => LoadCard(cartContainer, item.url, item.name));