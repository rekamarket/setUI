module Hyphens = {
  let key = "hyphens"

  @genType
  type t = [
    | #none
    | #manual
    | #auto
    | #inherit
    | #initial
    | #revert
    | #unset
  ]

  let initial = #manual;

  type value = string;

  type options = {
    "none": value,
    "manual": value,
    "auto": value,
    "inherit": value,
    "initial": value,
    "revert": value,
    "unset": value,
  };

  let options = {
    "none": "none",
    "manual": "manual",
    "auto": "auto",
    "inherit": "inherit",
    "initial": "initial",
    "revert": "revert",
    "unset": "unset",
  }

  type variant = {
    "none": string,
    "manual": string,
    "auto": string,
    "inherit": string,
    "initial": string,
    "revert": string,
    "unset": string,
  };

  type output = { "hyphens": value }
  type cssResolve = (value) => output
}
