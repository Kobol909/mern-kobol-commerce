/*
 * Define the schema for the customer model
 * ========================================
 *
 */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

const config = require('../config');
const constants = require('../core/constants');

const customerSchema = new mongoose.Schema({
  // Unique identifier for the object
  id: {
    type: String,
  },
  // String representing the object’s type. Objects of the same type share the same value.
  object: {
    type: String,
  },
  // The customer’s address.
  /**
   ** Child attributes
   **     address.city
   *  City, district, suburb, town, or village.
   **     address.country
   *  Two-letter country code (ISO 3166-1 alpha-2).
   **     address.line1
   *  Address line 1 (e.g., street, PO Box, or company name).
   **     address.line2
   *  Address line 2 (e.g., apartment, suite, unit, or building).
   **     address.postal_code
   *  ZIP or postal code.
   **     address.state
   *  State, county, province, or region.
   */
  address: {
    type: String,
  },
  /**
   * Current balance, if any, being stored on the customer.
   * If negative, the customer has credit to apply to their next invoice.
   * If positive, the customer has an amount owed that will be added to their next invoice.
   * The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice.
   * This balance is only taken into account as invoices are finalized.
   */
  balance: {
    type: String,
  },
  // Time at which the object was created. Measured in seconds since the Unix epoch.
  created: {
    type: String,
  },
  // Three-letter ISO code for the currency the customer can be charged in for recurring billing purposes.
  currency: {
    type: String,
  },
  // ID of the default payment source for the customer.
  // If you are using payment methods created via the PaymentMethods API, see the invoice_settings.default_payment_method field instead.
  default_source: {
    type: String,
  },
  /**
   * When the customer’s latest invoice is billed by charging automatically, delinquent is true if the invoice’s latest charge failed.
   * When the customer’s latest invoice is billed by sending an invoice, delinquent is true if the invoice isn’t paid by its due date.
   * If an invoice is marked uncollectible by dunning, delinquent doesn’t get reset to false.
   */
  delinquent: {
    type: String,
  },
  // An arbitrary string attached to the object. Often useful for displaying to users.
  description: {
    type: String,
  },
  // Describes the current discount active on the customer, if there is one.
  discount: {
    type: String,
  },
  // The customer’s email address.
  email: {
    type: String,
  },
  // The prefix for the customer used to generate unique invoice numbers.
  invoice_prefix: {
    type: String,
  },
  /**
   * The customer’s default invoice settings.
   *  Child attributes
   **     invoice_settings.custom_fields
   *  Default custom fields to be displayed on invoices for this customer.
   **     invoice_settings.custom_fields.name
   *  The name of the custom field.
   **     invoice_settings.custom_fields.value
   *  The value of the custom field.
   **     invoice_settings.default_payment_method
   *  ID of a payment method that’s attached to the customer, to be used as the customer’s default payment method for subscriptions and invoices.
   **     invoice_settings.footer
   *  Default footer to be displayed on invoices for this customer.
   */
  invoice_settings: {
    custom_fields: {
      type: String,
    },
    default_payment_method: {
      type: String,
    },
    footer: {
      type: String,
    },
  },
  // Has the value true if the object exists in live mode or the value false if the object exists in test mode.
  livemode: {
    type: String,
  },
  // Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  metadata: {
    type: String,
  },
  // The customer’s full name or business name.
  name: {
    type: String,
  },
  // The customer’s phone number.
  phone: {
    type: String,
  },
  preferred_locales: {
    type: String,
  },
  /**
   * Mailing and shipping address for the customer. Appears on invoices emailed to this customer.
   ** Child attributes
   **     shipping.address
   *  Customer shipping address.
   **     shipping.address.city
   *  City, district, suburb, town, or village.
   **     shipping.address.country
   *  Two-letter country code (ISO 3166-1 alpha-2).
   **     shipping.address.line1
   *  Address line 1 (e.g., street, PO Box, or company name).
   **     shipping.address.line2
   *  Address line 2 (e.g., apartment, suite, unit, or building).
   **     shipping.address.postal_code
   *  ZIP or postal code.
   **     shipping.address.state
   *  State, county, province, or region.
   **     shipping.name
   *  Customer name.
   **     shipping.phone
   *  Customer phone (including extension).
   */
  shipping: {
    type: String,
  },
  // Describes the customer’s tax exemption status. One of none, exempt, or reverse.
  // When set to reverse, invoice and receipt PDFs include the text “Reverse charge”.
  tax_exempt: {
    type: String,
  },
  // ID of the test clock this customer belongs to.
  test_clock: {
    type: String,
  },
});

mongoose.model('Customer', customerSchema);
