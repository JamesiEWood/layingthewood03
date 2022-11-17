import React from "react";
import useScript from "./hooks/useScript";

const NHLRanks = () => {
    useScript("https://cdn.fantasypros.com/js/fp-widget-2.0.js")
    return <div
      id="fp-widget"
      data-height="100%"
      data-width="100%"
      data-thead_color="#ffffff"
      data-thead_font="#000000"
      data-t_alt_row="#fafafa"
      data-link_color="#3778be"
      data-pill_color="#2881eb"
      data-sport="NHL"
      data-wtype="ros"
      data-filters=""
      data-scoring="STD"
      data-expert="5825"
      data-affiliate_code=""
      data-year="2022"
      data-week="0"
      data-auction="false"
      data-Notes="false"
      data-tags="false"
      data-cards="true"
      data-showPodcastIcons="false"
      data-format="table"
      data-promo_link="true"
      data-title_header="true"
      data-positions="ALL:C:LW:RW:D:G"
      data-ppr_positions=""
      data-half_positions=""
      data-site=""
      data-fd_aff=""
      data-dk_aff=""
      data-fa_aff=""
      data-dp_aff="">
      </div>;
};

  export default NHLRanks;
  